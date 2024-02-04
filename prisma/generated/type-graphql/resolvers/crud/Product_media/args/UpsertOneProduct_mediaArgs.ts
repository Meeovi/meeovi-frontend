import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_mediaCreateInput } from "../../../inputs/Product_mediaCreateInput";
import { Product_mediaUpdateInput } from "../../../inputs/Product_mediaUpdateInput";
import { Product_mediaWhereUniqueInput } from "../../../inputs/Product_mediaWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneProduct_mediaArgs {
  @TypeGraphQL.Field(_type => Product_mediaWhereUniqueInput, {
    nullable: false
  })
  where!: Product_mediaWhereUniqueInput;

  @TypeGraphQL.Field(_type => Product_mediaCreateInput, {
    nullable: false
  })
  create!: Product_mediaCreateInput;

  @TypeGraphQL.Field(_type => Product_mediaUpdateInput, {
    nullable: false
  })
  update!: Product_mediaUpdateInput;
}
