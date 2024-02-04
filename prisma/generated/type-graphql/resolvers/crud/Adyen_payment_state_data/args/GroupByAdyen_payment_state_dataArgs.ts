import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Adyen_payment_state_dataOrderByWithAggregationInput } from "../../../inputs/Adyen_payment_state_dataOrderByWithAggregationInput";
import { Adyen_payment_state_dataScalarWhereWithAggregatesInput } from "../../../inputs/Adyen_payment_state_dataScalarWhereWithAggregatesInput";
import { Adyen_payment_state_dataWhereInput } from "../../../inputs/Adyen_payment_state_dataWhereInput";
import { Adyen_payment_state_dataScalarFieldEnum } from "../../../../enums/Adyen_payment_state_dataScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByAdyen_payment_state_dataArgs {
  @TypeGraphQL.Field(_type => Adyen_payment_state_dataWhereInput, {
    nullable: true
  })
  where?: Adyen_payment_state_dataWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Adyen_payment_state_dataOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Adyen_payment_state_dataOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Adyen_payment_state_dataScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "token" | "state_data" | "created_at" | "updated_at">;

  @TypeGraphQL.Field(_type => Adyen_payment_state_dataScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Adyen_payment_state_dataScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
