import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Delivery_time_translationCreateManyLanguageInputEnvelope } from "../inputs/Delivery_time_translationCreateManyLanguageInputEnvelope";
import { Delivery_time_translationCreateOrConnectWithoutLanguageInput } from "../inputs/Delivery_time_translationCreateOrConnectWithoutLanguageInput";
import { Delivery_time_translationCreateWithoutLanguageInput } from "../inputs/Delivery_time_translationCreateWithoutLanguageInput";
import { Delivery_time_translationWhereUniqueInput } from "../inputs/Delivery_time_translationWhereUniqueInput";

@TypeGraphQL.InputType("Delivery_time_translationCreateNestedManyWithoutLanguageInput", {})
export class Delivery_time_translationCreateNestedManyWithoutLanguageInput {
  @TypeGraphQL.Field(_type => [Delivery_time_translationCreateWithoutLanguageInput], {
    nullable: true
  })
  create?: Delivery_time_translationCreateWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => [Delivery_time_translationCreateOrConnectWithoutLanguageInput], {
    nullable: true
  })
  connectOrCreate?: Delivery_time_translationCreateOrConnectWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => Delivery_time_translationCreateManyLanguageInputEnvelope, {
    nullable: true
  })
  createMany?: Delivery_time_translationCreateManyLanguageInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Delivery_time_translationWhereUniqueInput], {
    nullable: true
  })
  connect?: Delivery_time_translationWhereUniqueInput[] | undefined;
}
