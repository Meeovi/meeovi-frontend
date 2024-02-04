import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_payment_methodCreateManyMediaInputEnvelope } from "../inputs/App_payment_methodCreateManyMediaInputEnvelope";
import { App_payment_methodCreateOrConnectWithoutMediaInput } from "../inputs/App_payment_methodCreateOrConnectWithoutMediaInput";
import { App_payment_methodCreateWithoutMediaInput } from "../inputs/App_payment_methodCreateWithoutMediaInput";
import { App_payment_methodScalarWhereInput } from "../inputs/App_payment_methodScalarWhereInput";
import { App_payment_methodUpdateManyWithWhereWithoutMediaInput } from "../inputs/App_payment_methodUpdateManyWithWhereWithoutMediaInput";
import { App_payment_methodUpdateWithWhereUniqueWithoutMediaInput } from "../inputs/App_payment_methodUpdateWithWhereUniqueWithoutMediaInput";
import { App_payment_methodUpsertWithWhereUniqueWithoutMediaInput } from "../inputs/App_payment_methodUpsertWithWhereUniqueWithoutMediaInput";
import { App_payment_methodWhereUniqueInput } from "../inputs/App_payment_methodWhereUniqueInput";

@TypeGraphQL.InputType("App_payment_methodUpdateManyWithoutMediaNestedInput", {})
export class App_payment_methodUpdateManyWithoutMediaNestedInput {
  @TypeGraphQL.Field(_type => [App_payment_methodCreateWithoutMediaInput], {
    nullable: true
  })
  create?: App_payment_methodCreateWithoutMediaInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_payment_methodCreateOrConnectWithoutMediaInput], {
    nullable: true
  })
  connectOrCreate?: App_payment_methodCreateOrConnectWithoutMediaInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_payment_methodUpsertWithWhereUniqueWithoutMediaInput], {
    nullable: true
  })
  upsert?: App_payment_methodUpsertWithWhereUniqueWithoutMediaInput[] | undefined;

  @TypeGraphQL.Field(_type => App_payment_methodCreateManyMediaInputEnvelope, {
    nullable: true
  })
  createMany?: App_payment_methodCreateManyMediaInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [App_payment_methodUpdateWithWhereUniqueWithoutMediaInput], {
    nullable: true
  })
  update?: App_payment_methodUpdateWithWhereUniqueWithoutMediaInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_payment_methodUpdateManyWithWhereWithoutMediaInput], {
    nullable: true
  })
  updateMany?: App_payment_methodUpdateManyWithWhereWithoutMediaInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_payment_methodScalarWhereInput], {
    nullable: true
  })
  deleteMany?: App_payment_methodScalarWhereInput[] | undefined;
}
