import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerCreateManyCustomer_groupInput } from "../inputs/CustomerCreateManyCustomer_groupInput";

@TypeGraphQL.InputType("CustomerCreateManyCustomer_groupInputEnvelope", {})
export class CustomerCreateManyCustomer_groupInputEnvelope {
  @TypeGraphQL.Field(_type => [CustomerCreateManyCustomer_groupInput], {
    nullable: false
  })
  data!: CustomerCreateManyCustomer_groupInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
