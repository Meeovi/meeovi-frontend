import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_stream_filterWhereInput } from "../../../inputs/Product_stream_filterWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyProduct_stream_filterArgs {
  @TypeGraphQL.Field(_type => Product_stream_filterWhereInput, {
    nullable: true
  })
  where?: Product_stream_filterWhereInput | undefined;
}
