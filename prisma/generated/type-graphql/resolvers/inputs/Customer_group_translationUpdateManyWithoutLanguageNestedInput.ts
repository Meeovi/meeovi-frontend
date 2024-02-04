import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Customer_group_translationCreateManyLanguageInputEnvelope } from "../inputs/Customer_group_translationCreateManyLanguageInputEnvelope";
import { Customer_group_translationCreateOrConnectWithoutLanguageInput } from "../inputs/Customer_group_translationCreateOrConnectWithoutLanguageInput";
import { Customer_group_translationCreateWithoutLanguageInput } from "../inputs/Customer_group_translationCreateWithoutLanguageInput";
import { Customer_group_translationScalarWhereInput } from "../inputs/Customer_group_translationScalarWhereInput";
import { Customer_group_translationUpdateManyWithWhereWithoutLanguageInput } from "../inputs/Customer_group_translationUpdateManyWithWhereWithoutLanguageInput";
import { Customer_group_translationUpdateWithWhereUniqueWithoutLanguageInput } from "../inputs/Customer_group_translationUpdateWithWhereUniqueWithoutLanguageInput";
import { Customer_group_translationUpsertWithWhereUniqueWithoutLanguageInput } from "../inputs/Customer_group_translationUpsertWithWhereUniqueWithoutLanguageInput";
import { Customer_group_translationWhereUniqueInput } from "../inputs/Customer_group_translationWhereUniqueInput";

@TypeGraphQL.InputType("Customer_group_translationUpdateManyWithoutLanguageNestedInput", {})
export class Customer_group_translationUpdateManyWithoutLanguageNestedInput {
  @TypeGraphQL.Field(_type => [Customer_group_translationCreateWithoutLanguageInput], {
    nullable: true
  })
  create?: Customer_group_translationCreateWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => [Customer_group_translationCreateOrConnectWithoutLanguageInput], {
    nullable: true
  })
  connectOrCreate?: Customer_group_translationCreateOrConnectWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => [Customer_group_translationUpsertWithWhereUniqueWithoutLanguageInput], {
    nullable: true
  })
  upsert?: Customer_group_translationUpsertWithWhereUniqueWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => Customer_group_translationCreateManyLanguageInputEnvelope, {
    nullable: true
  })
  createMany?: Customer_group_translationCreateManyLanguageInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Customer_group_translationWhereUniqueInput], {
    nullable: true
  })
  set?: Customer_group_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Customer_group_translationWhereUniqueInput], {
    nullable: true
  })
  disconnect?: Customer_group_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Customer_group_translationWhereUniqueInput], {
    nullable: true
  })
  delete?: Customer_group_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Customer_group_translationWhereUniqueInput], {
    nullable: true
  })
  connect?: Customer_group_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Customer_group_translationUpdateWithWhereUniqueWithoutLanguageInput], {
    nullable: true
  })
  update?: Customer_group_translationUpdateWithWhereUniqueWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => [Customer_group_translationUpdateManyWithWhereWithoutLanguageInput], {
    nullable: true
  })
  updateMany?: Customer_group_translationUpdateManyWithWhereWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => [Customer_group_translationScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Customer_group_translationScalarWhereInput[] | undefined;
}
