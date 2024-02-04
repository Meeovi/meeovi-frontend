import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_stream_mappingWhereUniqueInput } from "../../../inputs/Product_stream_mappingWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueProduct_stream_mappingOrThrowArgs {
  @TypeGraphQL.Field(_type => Product_stream_mappingWhereUniqueInput, {
    nullable: false
  })
  where!: Product_stream_mappingWhereUniqueInput;
}
