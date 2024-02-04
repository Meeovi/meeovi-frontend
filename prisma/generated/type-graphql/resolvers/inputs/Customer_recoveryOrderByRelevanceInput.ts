import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Customer_recoveryOrderByRelevanceFieldEnum } from "../../enums/Customer_recoveryOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Customer_recoveryOrderByRelevanceInput", {})
export class Customer_recoveryOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [Customer_recoveryOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: "hash"[];

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
