import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Order_transaction_captureCreateManyState_machine_stateInput } from "../inputs/Order_transaction_captureCreateManyState_machine_stateInput";

@TypeGraphQL.InputType("Order_transaction_captureCreateManyState_machine_stateInputEnvelope", {})
export class Order_transaction_captureCreateManyState_machine_stateInputEnvelope {
  @TypeGraphQL.Field(_type => [Order_transaction_captureCreateManyState_machine_stateInput], {
    nullable: false
  })
  data!: Order_transaction_captureCreateManyState_machine_stateInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
