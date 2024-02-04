import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerCreateManySalutationInput } from "../inputs/CustomerCreateManySalutationInput";

@TypeGraphQL.InputType("CustomerCreateManySalutationInputEnvelope", {})
export class CustomerCreateManySalutationInputEnvelope {
  @TypeGraphQL.Field(_type => [CustomerCreateManySalutationInput], {
    nullable: false
  })
  data!: CustomerCreateManySalutationInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
