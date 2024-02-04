import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_payment_methodScalarWhereInput } from "../inputs/App_payment_methodScalarWhereInput";
import { App_payment_methodUpdateManyMutationInput } from "../inputs/App_payment_methodUpdateManyMutationInput";

@TypeGraphQL.InputType("App_payment_methodUpdateManyWithWhereWithoutMediaInput", {})
export class App_payment_methodUpdateManyWithWhereWithoutMediaInput {
  @TypeGraphQL.Field(_type => App_payment_methodScalarWhereInput, {
    nullable: false
  })
  where!: App_payment_methodScalarWhereInput;

  @TypeGraphQL.Field(_type => App_payment_methodUpdateManyMutationInput, {
    nullable: false
  })
  data!: App_payment_methodUpdateManyMutationInput;
}
