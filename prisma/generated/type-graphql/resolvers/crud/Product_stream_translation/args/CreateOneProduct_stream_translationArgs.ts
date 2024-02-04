import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_stream_translationCreateInput } from "../../../inputs/Product_stream_translationCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneProduct_stream_translationArgs {
  @TypeGraphQL.Field(_type => Product_stream_translationCreateInput, {
    nullable: false
  })
  data!: Product_stream_translationCreateInput;
}
