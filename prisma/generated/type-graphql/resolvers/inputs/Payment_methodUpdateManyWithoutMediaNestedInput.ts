import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Payment_methodCreateManyMediaInputEnvelope } from "../inputs/Payment_methodCreateManyMediaInputEnvelope";
import { Payment_methodCreateOrConnectWithoutMediaInput } from "../inputs/Payment_methodCreateOrConnectWithoutMediaInput";
import { Payment_methodCreateWithoutMediaInput } from "../inputs/Payment_methodCreateWithoutMediaInput";
import { Payment_methodScalarWhereInput } from "../inputs/Payment_methodScalarWhereInput";
import { Payment_methodUpdateManyWithWhereWithoutMediaInput } from "../inputs/Payment_methodUpdateManyWithWhereWithoutMediaInput";
import { Payment_methodUpdateWithWhereUniqueWithoutMediaInput } from "../inputs/Payment_methodUpdateWithWhereUniqueWithoutMediaInput";
import { Payment_methodUpsertWithWhereUniqueWithoutMediaInput } from "../inputs/Payment_methodUpsertWithWhereUniqueWithoutMediaInput";
import { Payment_methodWhereUniqueInput } from "../inputs/Payment_methodWhereUniqueInput";

@TypeGraphQL.InputType("Payment_methodUpdateManyWithoutMediaNestedInput", {})
export class Payment_methodUpdateManyWithoutMediaNestedInput {
  @TypeGraphQL.Field(_type => [Payment_methodCreateWithoutMediaInput], {
    nullable: true
  })
  create?: Payment_methodCreateWithoutMediaInput[] | undefined;

  @TypeGraphQL.Field(_type => [Payment_methodCreateOrConnectWithoutMediaInput], {
    nullable: true
  })
  connectOrCreate?: Payment_methodCreateOrConnectWithoutMediaInput[] | undefined;

  @TypeGraphQL.Field(_type => [Payment_methodUpsertWithWhereUniqueWithoutMediaInput], {
    nullable: true
  })
  upsert?: Payment_methodUpsertWithWhereUniqueWithoutMediaInput[] | undefined;

  @TypeGraphQL.Field(_type => Payment_methodCreateManyMediaInputEnvelope, {
    nullable: true
  })
  createMany?: Payment_methodCreateManyMediaInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Payment_methodWhereUniqueInput], {
    nullable: true
  })
  set?: Payment_methodWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Payment_methodWhereUniqueInput], {
    nullable: true
  })
  disconnect?: Payment_methodWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Payment_methodWhereUniqueInput], {
    nullable: true
  })
  delete?: Payment_methodWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Payment_methodWhereUniqueInput], {
    nullable: true
  })
  connect?: Payment_methodWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Payment_methodUpdateWithWhereUniqueWithoutMediaInput], {
    nullable: true
  })
  update?: Payment_methodUpdateWithWhereUniqueWithoutMediaInput[] | undefined;

  @TypeGraphQL.Field(_type => [Payment_methodUpdateManyWithWhereWithoutMediaInput], {
    nullable: true
  })
  updateMany?: Payment_methodUpdateManyWithWhereWithoutMediaInput[] | undefined;

  @TypeGraphQL.Field(_type => [Payment_methodScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Payment_methodScalarWhereInput[] | undefined;
}
