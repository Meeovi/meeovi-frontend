import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Customer_addressCreateManySalutationInput } from "../inputs/Customer_addressCreateManySalutationInput";

@TypeGraphQL.InputType("Customer_addressCreateManySalutationInputEnvelope", {})
export class Customer_addressCreateManySalutationInputEnvelope {
  @TypeGraphQL.Field(_type => [Customer_addressCreateManySalutationInput], {
    nullable: false
  })
  data!: Customer_addressCreateManySalutationInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
