import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_payment_methodCreateManyMediaInputEnvelope } from "../inputs/App_payment_methodCreateManyMediaInputEnvelope";
import { App_payment_methodCreateOrConnectWithoutMediaInput } from "../inputs/App_payment_methodCreateOrConnectWithoutMediaInput";
import { App_payment_methodCreateWithoutMediaInput } from "../inputs/App_payment_methodCreateWithoutMediaInput";
import { App_payment_methodWhereUniqueInput } from "../inputs/App_payment_methodWhereUniqueInput";

@TypeGraphQL.InputType("App_payment_methodCreateNestedManyWithoutMediaInput", {})
export class App_payment_methodCreateNestedManyWithoutMediaInput {
  @TypeGraphQL.Field(_type => [App_payment_methodCreateWithoutMediaInput], {
    nullable: true
  })
  create?: App_payment_methodCreateWithoutMediaInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_payment_methodCreateOrConnectWithoutMediaInput], {
    nullable: true
  })
  connectOrCreate?: App_payment_methodCreateOrConnectWithoutMediaInput[] | undefined;

  @TypeGraphQL.Field(_type => App_payment_methodCreateManyMediaInputEnvelope, {
    nullable: true
  })
  createMany?: App_payment_methodCreateManyMediaInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [App_payment_methodWhereUniqueInput], {
    nullable: true
  })
  connect?: App_payment_methodWhereUniqueInput[] | undefined;
}
