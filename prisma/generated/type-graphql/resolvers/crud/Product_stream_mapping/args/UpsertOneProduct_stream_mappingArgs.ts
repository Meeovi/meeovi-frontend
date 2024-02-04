import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_stream_mappingCreateInput } from "../../../inputs/Product_stream_mappingCreateInput";
import { Product_stream_mappingUpdateInput } from "../../../inputs/Product_stream_mappingUpdateInput";
import { Product_stream_mappingWhereUniqueInput } from "../../../inputs/Product_stream_mappingWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneProduct_stream_mappingArgs {
  @TypeGraphQL.Field(_type => Product_stream_mappingWhereUniqueInput, {
    nullable: false
  })
  where!: Product_stream_mappingWhereUniqueInput;

  @TypeGraphQL.Field(_type => Product_stream_mappingCreateInput, {
    nullable: false
  })
  create!: Product_stream_mappingCreateInput;

  @TypeGraphQL.Field(_type => Product_stream_mappingUpdateInput, {
    nullable: false
  })
  update!: Product_stream_mappingUpdateInput;
}
