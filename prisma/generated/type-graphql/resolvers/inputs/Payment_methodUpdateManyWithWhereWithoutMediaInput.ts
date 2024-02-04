import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Payment_methodScalarWhereInput } from "../inputs/Payment_methodScalarWhereInput";
import { Payment_methodUpdateManyMutationInput } from "../inputs/Payment_methodUpdateManyMutationInput";

@TypeGraphQL.InputType("Payment_methodUpdateManyWithWhereWithoutMediaInput", {})
export class Payment_methodUpdateManyWithWhereWithoutMediaInput {
  @TypeGraphQL.Field(_type => Payment_methodScalarWhereInput, {
    nullable: false
  })
  where!: Payment_methodScalarWhereInput;

  @TypeGraphQL.Field(_type => Payment_methodUpdateManyMutationInput, {
    nullable: false
  })
  data!: Payment_methodUpdateManyMutationInput;
}
