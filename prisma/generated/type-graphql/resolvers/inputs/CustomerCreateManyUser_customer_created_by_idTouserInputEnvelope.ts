import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerCreateManyUser_customer_created_by_idTouserInput } from "../inputs/CustomerCreateManyUser_customer_created_by_idTouserInput";

@TypeGraphQL.InputType("CustomerCreateManyUser_customer_created_by_idTouserInputEnvelope", {})
export class CustomerCreateManyUser_customer_created_by_idTouserInputEnvelope {
  @TypeGraphQL.Field(_type => [CustomerCreateManyUser_customer_created_by_idTouserInput], {
    nullable: false
  })
  data!: CustomerCreateManyUser_customer_created_by_idTouserInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
