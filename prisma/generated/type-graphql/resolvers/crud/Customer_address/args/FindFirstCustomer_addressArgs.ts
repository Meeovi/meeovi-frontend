import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Customer_addressOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Customer_addressOrderByWithRelationAndSearchRelevanceInput";
import { Customer_addressWhereInput } from "../../../inputs/Customer_addressWhereInput";
import { Customer_addressWhereUniqueInput } from "../../../inputs/Customer_addressWhereUniqueInput";
import { Customer_addressScalarFieldEnum } from "../../../../enums/Customer_addressScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstCustomer_addressArgs {
  @TypeGraphQL.Field(_type => Customer_addressWhereInput, {
    nullable: true
  })
  where?: Customer_addressWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Customer_addressOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Customer_addressOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Customer_addressWhereUniqueInput, {
    nullable: true
  })
  cursor?: Customer_addressWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Customer_addressScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "customer_id" | "country_id" | "country_state_id" | "company" | "department" | "salutation_id" | "title" | "first_name" | "last_name" | "street" | "zipcode" | "city" | "phone_number" | "additional_address_line1" | "additional_address_line2" | "custom_fields" | "created_at" | "updated_at"> | undefined;
}
