import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_addressCreateManySalutationInput } from "../inputs/Order_addressCreateManySalutationInput";

@TypeGraphQL.InputType("Order_addressCreateManySalutationInputEnvelope", {})
export class Order_addressCreateManySalutationInputEnvelope {
  @TypeGraphQL.Field(_type => [Order_addressCreateManySalutationInput], {
    nullable: false
  })
  data!: Order_addressCreateManySalutationInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
