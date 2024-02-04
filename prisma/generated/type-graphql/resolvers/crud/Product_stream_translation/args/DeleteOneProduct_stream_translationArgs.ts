import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_stream_translationWhereUniqueInput } from "../../../inputs/Product_stream_translationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneProduct_stream_translationArgs {
  @TypeGraphQL.Field(_type => Product_stream_translationWhereUniqueInput, {
    nullable: false
  })
  where!: Product_stream_translationWhereUniqueInput;
}
