import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_payment_methodCreateManyAppInputEnvelope } from "../inputs/App_payment_methodCreateManyAppInputEnvelope";
import { App_payment_methodCreateOrConnectWithoutAppInput } from "../inputs/App_payment_methodCreateOrConnectWithoutAppInput";
import { App_payment_methodCreateWithoutAppInput } from "../inputs/App_payment_methodCreateWithoutAppInput";
import { App_payment_methodScalarWhereInput } from "../inputs/App_payment_methodScalarWhereInput";
import { App_payment_methodUpdateManyWithWhereWithoutAppInput } from "../inputs/App_payment_methodUpdateManyWithWhereWithoutAppInput";
import { App_payment_methodUpdateWithWhereUniqueWithoutAppInput } from "../inputs/App_payment_methodUpdateWithWhereUniqueWithoutAppInput";
import { App_payment_methodUpsertWithWhereUniqueWithoutAppInput } from "../inputs/App_payment_methodUpsertWithWhereUniqueWithoutAppInput";
import { App_payment_methodWhereUniqueInput } from "../inputs/App_payment_methodWhereUniqueInput";

@TypeGraphQL.InputType("App_payment_methodUpdateManyWithoutAppNestedInput", {})
export class App_payment_methodUpdateManyWithoutAppNestedInput {
  @TypeGraphQL.Field(_type => [App_payment_methodCreateWithoutAppInput], {
    nullable: true
  })
  create?: App_payment_methodCreateWithoutAppInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_payment_methodCreateOrConnectWithoutAppInput], {
    nullable: true
  })
  connectOrCreate?: App_payment_methodCreateOrConnectWithoutAppInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_payment_methodUpsertWithWhereUniqueWithoutAppInput], {
    nullable: true
  })
  upsert?: App_payment_methodUpsertWithWhereUniqueWithoutAppInput[] | undefined;

  @TypeGraphQL.Field(_type => App_payment_methodCreateManyAppInputEnvelope, {
    nullable: true
  })
  createMany?: App_payment_methodCreateManyAppInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [App_payment_methodWhereUniqueInput], {
    nullable: true
  })
  set?: App_payment_methodWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_payment_methodWhereUniqueInput], {
    nullable: true
  })
  disconnect?: App_payment_methodWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_payment_methodWhereUniqueInput], {
    nullable: true
  })
  delete?: App_payment_methodWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_payment_methodWhereUniqueInput], {
    nullable: true
  })
  connect?: App_payment_methodWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_payment_methodUpdateWithWhereUniqueWithoutAppInput], {
    nullable: true
  })
  update?: App_payment_methodUpdateWithWhereUniqueWithoutAppInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_payment_methodUpdateManyWithWhereWithoutAppInput], {
    nullable: true
  })
  updateMany?: App_payment_methodUpdateManyWithWhereWithoutAppInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_payment_methodScalarWhereInput], {
    nullable: true
  })
  deleteMany?: App_payment_methodScalarWhereInput[] | undefined;
}
