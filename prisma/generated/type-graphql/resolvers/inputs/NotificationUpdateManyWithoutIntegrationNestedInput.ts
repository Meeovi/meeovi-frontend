import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NotificationCreateManyIntegrationInputEnvelope } from "../inputs/NotificationCreateManyIntegrationInputEnvelope";
import { NotificationCreateOrConnectWithoutIntegrationInput } from "../inputs/NotificationCreateOrConnectWithoutIntegrationInput";
import { NotificationCreateWithoutIntegrationInput } from "../inputs/NotificationCreateWithoutIntegrationInput";
import { NotificationScalarWhereInput } from "../inputs/NotificationScalarWhereInput";
import { NotificationUpdateManyWithWhereWithoutIntegrationInput } from "../inputs/NotificationUpdateManyWithWhereWithoutIntegrationInput";
import { NotificationUpdateWithWhereUniqueWithoutIntegrationInput } from "../inputs/NotificationUpdateWithWhereUniqueWithoutIntegrationInput";
import { NotificationUpsertWithWhereUniqueWithoutIntegrationInput } from "../inputs/NotificationUpsertWithWhereUniqueWithoutIntegrationInput";
import { NotificationWhereUniqueInput } from "../inputs/NotificationWhereUniqueInput";

@TypeGraphQL.InputType("NotificationUpdateManyWithoutIntegrationNestedInput", {})
export class NotificationUpdateManyWithoutIntegrationNestedInput {
  @TypeGraphQL.Field(_type => [NotificationCreateWithoutIntegrationInput], {
    nullable: true
  })
  create?: NotificationCreateWithoutIntegrationInput[] | undefined;

  @TypeGraphQL.Field(_type => [NotificationCreateOrConnectWithoutIntegrationInput], {
    nullable: true
  })
  connectOrCreate?: NotificationCreateOrConnectWithoutIntegrationInput[] | undefined;

  @TypeGraphQL.Field(_type => [NotificationUpsertWithWhereUniqueWithoutIntegrationInput], {
    nullable: true
  })
  upsert?: NotificationUpsertWithWhereUniqueWithoutIntegrationInput[] | undefined;

  @TypeGraphQL.Field(_type => NotificationCreateManyIntegrationInputEnvelope, {
    nullable: true
  })
  createMany?: NotificationCreateManyIntegrationInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [NotificationWhereUniqueInput], {
    nullable: true
  })
  set?: NotificationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [NotificationWhereUniqueInput], {
    nullable: true
  })
  disconnect?: NotificationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [NotificationWhereUniqueInput], {
    nullable: true
  })
  delete?: NotificationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [NotificationWhereUniqueInput], {
    nullable: true
  })
  connect?: NotificationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [NotificationUpdateWithWhereUniqueWithoutIntegrationInput], {
    nullable: true
  })
  update?: NotificationUpdateWithWhereUniqueWithoutIntegrationInput[] | undefined;

  @TypeGraphQL.Field(_type => [NotificationUpdateManyWithWhereWithoutIntegrationInput], {
    nullable: true
  })
  updateMany?: NotificationUpdateManyWithWhereWithoutIntegrationInput[] | undefined;

  @TypeGraphQL.Field(_type => [NotificationScalarWhereInput], {
    nullable: true
  })
  deleteMany?: NotificationScalarWhereInput[] | undefined;
}
