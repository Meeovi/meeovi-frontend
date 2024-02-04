import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Custom_entityCreateManyAppInputEnvelope } from "../inputs/Custom_entityCreateManyAppInputEnvelope";
import { Custom_entityCreateOrConnectWithoutAppInput } from "../inputs/Custom_entityCreateOrConnectWithoutAppInput";
import { Custom_entityCreateWithoutAppInput } from "../inputs/Custom_entityCreateWithoutAppInput";
import { Custom_entityWhereUniqueInput } from "../inputs/Custom_entityWhereUniqueInput";

@TypeGraphQL.InputType("Custom_entityCreateNestedManyWithoutAppInput", {})
export class Custom_entityCreateNestedManyWithoutAppInput {
  @TypeGraphQL.Field(_type => [Custom_entityCreateWithoutAppInput], {
    nullable: true
  })
  create?: Custom_entityCreateWithoutAppInput[] | undefined;

  @TypeGraphQL.Field(_type => [Custom_entityCreateOrConnectWithoutAppInput], {
    nullable: true
  })
  connectOrCreate?: Custom_entityCreateOrConnectWithoutAppInput[] | undefined;

  @TypeGraphQL.Field(_type => Custom_entityCreateManyAppInputEnvelope, {
    nullable: true
  })
  createMany?: Custom_entityCreateManyAppInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Custom_entityWhereUniqueInput], {
    nullable: true
  })
  connect?: Custom_entityWhereUniqueInput[] | undefined;
}
