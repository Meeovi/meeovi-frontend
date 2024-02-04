import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_mediaUpdateInput } from "../../../inputs/Product_mediaUpdateInput";
import { Product_mediaWhereUniqueInput } from "../../../inputs/Product_mediaWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneProduct_mediaArgs {
  @TypeGraphQL.Field(_type => Product_mediaUpdateInput, {
    nullable: false
  })
  data!: Product_mediaUpdateInput;

  @TypeGraphQL.Field(_type => Product_mediaWhereUniqueInput, {
    nullable: false
  })
  where!: Product_mediaWhereUniqueInput;
}
