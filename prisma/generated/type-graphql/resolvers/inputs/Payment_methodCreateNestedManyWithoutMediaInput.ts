import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Payment_methodCreateManyMediaInputEnvelope } from "../inputs/Payment_methodCreateManyMediaInputEnvelope";
import { Payment_methodCreateOrConnectWithoutMediaInput } from "../inputs/Payment_methodCreateOrConnectWithoutMediaInput";
import { Payment_methodCreateWithoutMediaInput } from "../inputs/Payment_methodCreateWithoutMediaInput";
import { Payment_methodWhereUniqueInput } from "../inputs/Payment_methodWhereUniqueInput";

@TypeGraphQL.InputType("Payment_methodCreateNestedManyWithoutMediaInput", {})
export class Payment_methodCreateNestedManyWithoutMediaInput {
  @TypeGraphQL.Field(_type => [Payment_methodCreateWithoutMediaInput], {
    nullable: true
  })
  create?: Payment_methodCreateWithoutMediaInput[] | undefined;

  @TypeGraphQL.Field(_type => [Payment_methodCreateOrConnectWithoutMediaInput], {
    nullable: true
  })
  connectOrCreate?: Payment_methodCreateOrConnectWithoutMediaInput[] | undefined;

  @TypeGraphQL.Field(_type => Payment_methodCreateManyMediaInputEnvelope, {
    nullable: true
  })
  createMany?: Payment_methodCreateManyMediaInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Payment_methodWhereUniqueInput], {
    nullable: true
  })
  connect?: Payment_methodWhereUniqueInput[] | undefined;
}
