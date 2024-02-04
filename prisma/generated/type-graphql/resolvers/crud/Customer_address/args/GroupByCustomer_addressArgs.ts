import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Customer_addressOrderByWithAggregationInput } from "../../../inputs/Customer_addressOrderByWithAggregationInput";
import { Customer_addressScalarWhereWithAggregatesInput } from "../../../inputs/Customer_addressScalarWhereWithAggregatesInput";
import { Customer_addressWhereInput } from "../../../inputs/Customer_addressWhereInput";
import { Customer_addressScalarFieldEnum } from "../../../../enums/Customer_addressScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByCustomer_addressArgs {
  @TypeGraphQL.Field(_type => Customer_addressWhereInput, {
    nullable: true
  })
  where?: Customer_addressWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Customer_addressOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Customer_addressOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Customer_addressScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "customer_id" | "country_id" | "country_state_id" | "company" | "department" | "salutation_id" | "title" | "first_name" | "last_name" | "street" | "zipcode" | "city" | "phone_number" | "additional_address_line1" | "additional_address_line2" | "custom_fields" | "created_at" | "updated_at">;

  @TypeGraphQL.Field(_type => Customer_addressScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Customer_addressScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
