import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Payment_methodCreateManyPluginInputEnvelope } from "../inputs/Payment_methodCreateManyPluginInputEnvelope";
import { Payment_methodCreateOrConnectWithoutPluginInput } from "../inputs/Payment_methodCreateOrConnectWithoutPluginInput";
import { Payment_methodCreateWithoutPluginInput } from "../inputs/Payment_methodCreateWithoutPluginInput";
import { Payment_methodScalarWhereInput } from "../inputs/Payment_methodScalarWhereInput";
import { Payment_methodUpdateManyWithWhereWithoutPluginInput } from "../inputs/Payment_methodUpdateManyWithWhereWithoutPluginInput";
import { Payment_methodUpdateWithWhereUniqueWithoutPluginInput } from "../inputs/Payment_methodUpdateWithWhereUniqueWithoutPluginInput";
import { Payment_methodUpsertWithWhereUniqueWithoutPluginInput } from "../inputs/Payment_methodUpsertWithWhereUniqueWithoutPluginInput";
import { Payment_methodWhereUniqueInput } from "../inputs/Payment_methodWhereUniqueInput";

@TypeGraphQL.InputType("Payment_methodUpdateManyWithoutPluginNestedInput", {})
export class Payment_methodUpdateManyWithoutPluginNestedInput {
  @TypeGraphQL.Field(_type => [Payment_methodCreateWithoutPluginInput], {
    nullable: true
  })
  create?: Payment_methodCreateWithoutPluginInput[] | undefined;

  @TypeGraphQL.Field(_type => [Payment_methodCreateOrConnectWithoutPluginInput], {
    nullable: true
  })
  connectOrCreate?: Payment_methodCreateOrConnectWithoutPluginInput[] | undefined;

  @TypeGraphQL.Field(_type => [Payment_methodUpsertWithWhereUniqueWithoutPluginInput], {
    nullable: true
  })
  upsert?: Payment_methodUpsertWithWhereUniqueWithoutPluginInput[] | undefined;

  @TypeGraphQL.Field(_type => Payment_methodCreateManyPluginInputEnvelope, {
    nullable: true
  })
  createMany?: Payment_methodCreateManyPluginInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [Payment_methodUpdateWithWhereUniqueWithoutPluginInput], {
    nullable: true
  })
  update?: Payment_methodUpdateWithWhereUniqueWithoutPluginInput[] | undefined;

  @TypeGraphQL.Field(_type => [Payment_methodUpdateManyWithWhereWithoutPluginInput], {
    nullable: true
  })
  updateMany?: Payment_methodUpdateManyWithWhereWithoutPluginInput[] | undefined;

  @TypeGraphQL.Field(_type => [Payment_methodScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Payment_methodScalarWhereInput[] | undefined;
}
