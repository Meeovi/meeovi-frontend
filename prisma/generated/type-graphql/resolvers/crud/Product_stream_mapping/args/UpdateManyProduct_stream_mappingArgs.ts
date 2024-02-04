import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Product_stream_mappingUpdateManyMutationInput } from "../../../inputs/Product_stream_mappingUpdateManyMutationInput";
import { Product_stream_mappingWhereInput } from "../../../inputs/Product_stream_mappingWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyProduct_stream_mappingArgs {
  @TypeGraphQL.Field(_type => Product_stream_mappingUpdateManyMutationInput, {
    nullable: false
  })
  data!: Product_stream_mappingUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Product_stream_mappingWhereInput, {
    nullable: true
  })
  where?: Product_stream_mappingWhereInput | undefined;
}
