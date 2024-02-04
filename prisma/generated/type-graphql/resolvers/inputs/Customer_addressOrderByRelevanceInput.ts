import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Customer_addressOrderByRelevanceFieldEnum } from "../../enums/Customer_addressOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Customer_addressOrderByRelevanceInput", {})
export class Customer_addressOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [Customer_addressOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"company" | "department" | "title" | "first_name" | "last_name" | "street" | "zipcode" | "city" | "phone_number" | "additional_address_line1" | "additional_address_line2" | "custom_fields">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
