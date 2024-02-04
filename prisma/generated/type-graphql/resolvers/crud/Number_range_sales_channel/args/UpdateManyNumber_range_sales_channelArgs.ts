import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Number_range_sales_channelUpdateManyMutationInput } from "../../../inputs/Number_range_sales_channelUpdateManyMutationInput";
import { Number_range_sales_channelWhereInput } from "../../../inputs/Number_range_sales_channelWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyNumber_range_sales_channelArgs {
  @TypeGraphQL.Field(_type => Number_range_sales_channelUpdateManyMutationInput, {
    nullable: false
  })
  data!: Number_range_sales_channelUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Number_range_sales_channelWhereInput, {
    nullable: true
  })
  where?: Number_range_sales_channelWhereInput | undefined;
}
