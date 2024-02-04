import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_stream_filterWhereUniqueInput } from "../../../inputs/Product_stream_filterWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneProduct_stream_filterArgs {
  @TypeGraphQL.Field(_type => Product_stream_filterWhereUniqueInput, {
    nullable: false
  })
  where!: Product_stream_filterWhereUniqueInput;
}
