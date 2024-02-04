import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_stream_translationCreateInput } from "../../../inputs/Product_stream_translationCreateInput";
import { Product_stream_translationUpdateInput } from "../../../inputs/Product_stream_translationUpdateInput";
import { Product_stream_translationWhereUniqueInput } from "../../../inputs/Product_stream_translationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneProduct_stream_translationArgs {
  @TypeGraphQL.Field(_type => Product_stream_translationWhereUniqueInput, {
    nullable: false
  })
  where!: Product_stream_translationWhereUniqueInput;

  @TypeGraphQL.Field(_type => Product_stream_translationCreateInput, {
    nullable: false
  })
  create!: Product_stream_translationCreateInput;

  @TypeGraphQL.Field(_type => Product_stream_translationUpdateInput, {
    nullable: false
  })
  update!: Product_stream_translationUpdateInput;
}
