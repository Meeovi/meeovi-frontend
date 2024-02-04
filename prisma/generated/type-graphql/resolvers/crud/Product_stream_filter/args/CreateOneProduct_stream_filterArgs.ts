import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_stream_filterCreateInput } from "../../../inputs/Product_stream_filterCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneProduct_stream_filterArgs {
  @TypeGraphQL.Field(_type => Product_stream_filterCreateInput, {
    nullable: false
  })
  data!: Product_stream_filterCreateInput;
}
