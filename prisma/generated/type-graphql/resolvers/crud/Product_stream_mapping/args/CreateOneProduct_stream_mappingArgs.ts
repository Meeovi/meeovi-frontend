import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_stream_mappingCreateInput } from "../../../inputs/Product_stream_mappingCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneProduct_stream_mappingArgs {
  @TypeGraphQL.Field(_type => Product_stream_mappingCreateInput, {
    nullable: false
  })
  data!: Product_stream_mappingCreateInput;
}
