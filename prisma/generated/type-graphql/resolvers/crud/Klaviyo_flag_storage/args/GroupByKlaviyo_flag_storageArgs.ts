import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Klaviyo_flag_storageOrderByWithAggregationInput } from "../../../inputs/Klaviyo_flag_storageOrderByWithAggregationInput";
import { Klaviyo_flag_storageScalarWhereWithAggregatesInput } from "../../../inputs/Klaviyo_flag_storageScalarWhereWithAggregatesInput";
import { Klaviyo_flag_storageWhereInput } from "../../../inputs/Klaviyo_flag_storageWhereInput";
import { Klaviyo_flag_storageScalarFieldEnum } from "../../../../enums/Klaviyo_flag_storageScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByKlaviyo_flag_storageArgs {
  @TypeGraphQL.Field(_type => Klaviyo_flag_storageWhereInput, {
    nullable: true
  })
  where?: Klaviyo_flag_storageWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Klaviyo_flag_storageOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Klaviyo_flag_storageOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Klaviyo_flag_storageScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "key" | "value" | "sales_channel_id" | "created_at" | "updated_at">;

  @TypeGraphQL.Field(_type => Klaviyo_flag_storageScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Klaviyo_flag_storageScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
