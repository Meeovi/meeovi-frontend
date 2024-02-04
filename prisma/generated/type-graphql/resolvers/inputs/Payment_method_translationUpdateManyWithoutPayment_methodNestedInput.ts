import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Payment_method_translationCreateManyPayment_methodInputEnvelope } from "../inputs/Payment_method_translationCreateManyPayment_methodInputEnvelope";
import { Payment_method_translationCreateOrConnectWithoutPayment_methodInput } from "../inputs/Payment_method_translationCreateOrConnectWithoutPayment_methodInput";
import { Payment_method_translationCreateWithoutPayment_methodInput } from "../inputs/Payment_method_translationCreateWithoutPayment_methodInput";
import { Payment_method_translationScalarWhereInput } from "../inputs/Payment_method_translationScalarWhereInput";
import { Payment_method_translationUpdateManyWithWhereWithoutPayment_methodInput } from "../inputs/Payment_method_translationUpdateManyWithWhereWithoutPayment_methodInput";
import { Payment_method_translationUpdateWithWhereUniqueWithoutPayment_methodInput } from "../inputs/Payment_method_translationUpdateWithWhereUniqueWithoutPayment_methodInput";
import { Payment_method_translationUpsertWithWhereUniqueWithoutPayment_methodInput } from "../inputs/Payment_method_translationUpsertWithWhereUniqueWithoutPayment_methodInput";
import { Payment_method_translationWhereUniqueInput } from "../inputs/Payment_method_translationWhereUniqueInput";

@TypeGraphQL.InputType("Payment_method_translationUpdateManyWithoutPayment_methodNestedInput", {})
export class Payment_method_translationUpdateManyWithoutPayment_methodNestedInput {
  @TypeGraphQL.Field(_type => [Payment_method_translationCreateWithoutPayment_methodInput], {
    nullable: true
  })
  create?: Payment_method_translationCreateWithoutPayment_methodInput[] | undefined;

  @TypeGraphQL.Field(_type => [Payment_method_translationCreateOrConnectWithoutPayment_methodInput], {
    nullable: true
  })
  connectOrCreate?: Payment_method_translationCreateOrConnectWithoutPayment_methodInput[] | undefined;

  @TypeGraphQL.Field(_type => [Payment_method_translationUpsertWithWhereUniqueWithoutPayment_methodInput], {
    nullable: true
  })
  upsert?: Payment_method_translationUpsertWithWhereUniqueWithoutPayment_methodInput[] | undefined;

  @TypeGraphQL.Field(_type => Payment_method_translationCreateManyPayment_methodInputEnvelope, {
    nullable: true
  })
  createMany?: Payment_method_translationCreateManyPayment_methodInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Payment_method_translationWhereUniqueInput], {
    nullable: true
  })
  set?: Payment_method_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Payment_method_translationWhereUniqueInput], {
    nullable: true
  })
  disconnect?: Payment_method_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Payment_method_translationWhereUniqueInput], {
    nullable: true
  })
  delete?: Payment_method_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Payment_method_translationWhereUniqueInput], {
    nullable: true
  })
  connect?: Payment_method_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Payment_method_translationUpdateWithWhereUniqueWithoutPayment_methodInput], {
    nullable: true
  })
  update?: Payment_method_translationUpdateWithWhereUniqueWithoutPayment_methodInput[] | undefined;

  @TypeGraphQL.Field(_type => [Payment_method_translationUpdateManyWithWhereWithoutPayment_methodInput], {
    nullable: true
  })
  updateMany?: Payment_method_translationUpdateManyWithWhereWithoutPayment_methodInput[] | undefined;

  @TypeGraphQL.Field(_type => [Payment_method_translationScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Payment_method_translationScalarWhereInput[] | undefined;
}
