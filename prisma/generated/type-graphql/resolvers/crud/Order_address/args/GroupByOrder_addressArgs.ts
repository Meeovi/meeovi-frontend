import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Order_addressOrderByWithAggregationInput } from "../../../inputs/Order_addressOrderByWithAggregationInput";
import { Order_addressScalarWhereWithAggregatesInput } from "../../../inputs/Order_addressScalarWhereWithAggregatesInput";
import { Order_addressWhereInput } from "../../../inputs/Order_addressWhereInput";
import { Order_addressScalarFieldEnum } from "../../../../enums/Order_addressScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByOrder_addressArgs {
  @TypeGraphQL.Field(_type => Order_addressWhereInput, {
    nullable: true
  })
  where?: Order_addressWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Order_addressOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Order_addressOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_addressScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "version_id" | "country_id" | "country_state_id" | "order_id" | "order_version_id" | "company" | "department" | "salutation_id" | "title" | "first_name" | "last_name" | "street" | "zipcode" | "city" | "vat_id" | "phone_number" | "additional_address_line1" | "additional_address_line2" | "custom_fields" | "created_at" | "updated_at">;

  @TypeGraphQL.Field(_type => Order_addressScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Order_addressScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
