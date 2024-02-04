import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_payment_methodCreateWithoutMediaInput } from "../inputs/App_payment_methodCreateWithoutMediaInput";
import { App_payment_methodUpdateWithoutMediaInput } from "../inputs/App_payment_methodUpdateWithoutMediaInput";
import { App_payment_methodWhereUniqueInput } from "../inputs/App_payment_methodWhereUniqueInput";

@TypeGraphQL.InputType("App_payment_methodUpsertWithWhereUniqueWithoutMediaInput", {})
export class App_payment_methodUpsertWithWhereUniqueWithoutMediaInput {
  @TypeGraphQL.Field(_type => App_payment_methodWhereUniqueInput, {
    nullable: false
  })
  where!: App_payment_methodWhereUniqueInput;

  @TypeGraphQL.Field(_type => App_payment_methodUpdateWithoutMediaInput, {
    nullable: false
  })
  update!: App_payment_methodUpdateWithoutMediaInput;

  @TypeGraphQL.Field(_type => App_payment_methodCreateWithoutMediaInput, {
    nullable: false
  })
  create!: App_payment_methodCreateWithoutMediaInput;
}
