import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_shipping_methodScalarWhereInput } from "../inputs/App_shipping_methodScalarWhereInput";
import { App_shipping_methodUpdateManyMutationInput } from "../inputs/App_shipping_methodUpdateManyMutationInput";

@TypeGraphQL.InputType("App_shipping_methodUpdateManyWithWhereWithoutMediaInput", {})
export class App_shipping_methodUpdateManyWithWhereWithoutMediaInput {
  @TypeGraphQL.Field(_type => App_shipping_methodScalarWhereInput, {
    nullable: false
  })
  where!: App_shipping_methodScalarWhereInput;

  @TypeGraphQL.Field(_type => App_shipping_methodUpdateManyMutationInput, {
    nullable: false
  })
  data!: App_shipping_methodUpdateManyMutationInput;
}
