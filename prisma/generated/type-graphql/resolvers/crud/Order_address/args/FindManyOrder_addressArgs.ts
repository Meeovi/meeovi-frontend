import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Order_addressOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Order_addressOrderByWithRelationAndSearchRelevanceInput";
import { Order_addressWhereInput } from "../../../inputs/Order_addressWhereInput";
import { Order_addressWhereUniqueInput } from "../../../inputs/Order_addressWhereUniqueInput";
import { Order_addressScalarFieldEnum } from "../../../../enums/Order_addressScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyOrder_addressArgs {
  @TypeGraphQL.Field(_type => Order_addressWhereInput, {
    nullable: true
  })
  where?: Order_addressWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Order_addressOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Order_addressOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Order_addressWhereUniqueInput, {
    nullable: true
  })
  cursor?: Order_addressWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Order_addressScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "version_id" | "country_id" | "country_state_id" | "order_id" | "order_version_id" | "company" | "department" | "salutation_id" | "title" | "first_name" | "last_name" | "street" | "zipcode" | "city" | "vat_id" | "phone_number" | "additional_address_line1" | "additional_address_line2" | "custom_fields" | "created_at" | "updated_at"> | undefined;
}
