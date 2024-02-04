import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AppCreateOrConnectWithoutApp_payment_methodInput } from "../inputs/AppCreateOrConnectWithoutApp_payment_methodInput";
import { AppCreateWithoutApp_payment_methodInput } from "../inputs/AppCreateWithoutApp_payment_methodInput";
import { AppUpdateToOneWithWhereWithoutApp_payment_methodInput } from "../inputs/AppUpdateToOneWithWhereWithoutApp_payment_methodInput";
import { AppUpsertWithoutApp_payment_methodInput } from "../inputs/AppUpsertWithoutApp_payment_methodInput";
import { AppWhereInput } from "../inputs/AppWhereInput";
import { AppWhereUniqueInput } from "../inputs/AppWhereUniqueInput";

@TypeGraphQL.InputType("AppUpdateOneWithoutApp_payment_methodNestedInput", {})
export class AppUpdateOneWithoutApp_payment_methodNestedInput {
  @TypeGraphQL.Field(_type => AppCreateWithoutApp_payment_methodInput, {
    nullable: true
  })
  create?: AppCreateWithoutApp_payment_methodInput | undefined;

  @TypeGraphQL.Field(_type => AppCreateOrConnectWithoutApp_payment_methodInput, {
    nullable: true
  })
  connectOrCreate?: AppCreateOrConnectWithoutApp_payment_methodInput | undefined;

  @TypeGraphQL.Field(_type => AppUpsertWithoutApp_payment_methodInput, {
    nullable: true
  })
  upsert?: AppUpsertWithoutApp_payment_methodInput | undefined;

  @TypeGraphQL.Field(_type => AppWhereInput, {
    nullable: true
  })
  disconnect?: AppWhereInput | undefined;

  @TypeGraphQL.Field(_type => AppWhereInput, {
    nullable: true
  })
  delete?: AppWhereInput | undefined;

  @TypeGraphQL.Field(_type => AppWhereUniqueInput, {
    nullable: true
  })
  connect?: AppWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => AppUpdateToOneWithWhereWithoutApp_payment_methodInput, {
    nullable: true
  })
  update?: AppUpdateToOneWithWhereWithoutApp_payment_methodInput | undefined;
}
