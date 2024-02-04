import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Delivery_time_translationCreateManyDelivery_timeInputEnvelope } from "../inputs/Delivery_time_translationCreateManyDelivery_timeInputEnvelope";
import { Delivery_time_translationCreateOrConnectWithoutDelivery_timeInput } from "../inputs/Delivery_time_translationCreateOrConnectWithoutDelivery_timeInput";
import { Delivery_time_translationCreateWithoutDelivery_timeInput } from "../inputs/Delivery_time_translationCreateWithoutDelivery_timeInput";
import { Delivery_time_translationScalarWhereInput } from "../inputs/Delivery_time_translationScalarWhereInput";
import { Delivery_time_translationUpdateManyWithWhereWithoutDelivery_timeInput } from "../inputs/Delivery_time_translationUpdateManyWithWhereWithoutDelivery_timeInput";
import { Delivery_time_translationUpdateWithWhereUniqueWithoutDelivery_timeInput } from "../inputs/Delivery_time_translationUpdateWithWhereUniqueWithoutDelivery_timeInput";
import { Delivery_time_translationUpsertWithWhereUniqueWithoutDelivery_timeInput } from "../inputs/Delivery_time_translationUpsertWithWhereUniqueWithoutDelivery_timeInput";
import { Delivery_time_translationWhereUniqueInput } from "../inputs/Delivery_time_translationWhereUniqueInput";

@TypeGraphQL.InputType("Delivery_time_translationUpdateManyWithoutDelivery_timeNestedInput", {})
export class Delivery_time_translationUpdateManyWithoutDelivery_timeNestedInput {
  @TypeGraphQL.Field(_type => [Delivery_time_translationCreateWithoutDelivery_timeInput], {
    nullable: true
  })
  create?: Delivery_time_translationCreateWithoutDelivery_timeInput[] | undefined;

  @TypeGraphQL.Field(_type => [Delivery_time_translationCreateOrConnectWithoutDelivery_timeInput], {
    nullable: true
  })
  connectOrCreate?: Delivery_time_translationCreateOrConnectWithoutDelivery_timeInput[] | undefined;

  @TypeGraphQL.Field(_type => [Delivery_time_translationUpsertWithWhereUniqueWithoutDelivery_timeInput], {
    nullable: true
  })
  upsert?: Delivery_time_translationUpsertWithWhereUniqueWithoutDelivery_timeInput[] | undefined;

  @TypeGraphQL.Field(_type => Delivery_time_translationCreateManyDelivery_timeInputEnvelope, {
    nullable: true
  })
  createMany?: Delivery_time_translationCreateManyDelivery_timeInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Delivery_time_translationWhereUniqueInput], {
    nullable: true
  })
  set?: Delivery_time_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Delivery_time_translationWhereUniqueInput], {
    nullable: true
  })
  disconnect?: Delivery_time_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Delivery_time_translationWhereUniqueInput], {
    nullable: true
  })
  delete?: Delivery_time_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Delivery_time_translationWhereUniqueInput], {
    nullable: true
  })
  connect?: Delivery_time_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Delivery_time_translationUpdateWithWhereUniqueWithoutDelivery_timeInput], {
    nullable: true
  })
  update?: Delivery_time_translationUpdateWithWhereUniqueWithoutDelivery_timeInput[] | undefined;

  @TypeGraphQL.Field(_type => [Delivery_time_translationUpdateManyWithWhereWithoutDelivery_timeInput], {
    nullable: true
  })
  updateMany?: Delivery_time_translationUpdateManyWithWhereWithoutDelivery_timeInput[] | undefined;

  @TypeGraphQL.Field(_type => [Delivery_time_translationScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Delivery_time_translationScalarWhereInput[] | undefined;
}
