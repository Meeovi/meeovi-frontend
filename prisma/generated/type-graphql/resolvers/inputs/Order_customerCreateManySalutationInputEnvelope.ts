import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_customerCreateManySalutationInput } from "../inputs/Order_customerCreateManySalutationInput";

@TypeGraphQL.InputType("Order_customerCreateManySalutationInputEnvelope", {})
export class Order_customerCreateManySalutationInputEnvelope {
  @TypeGraphQL.Field(_type => [Order_customerCreateManySalutationInput], {
    nullable: false
  })
  data!: Order_customerCreateManySalutationInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
