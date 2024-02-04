import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Custom_entityCreateWithoutAppInput } from "../inputs/Custom_entityCreateWithoutAppInput";
import { Custom_entityWhereUniqueInput } from "../inputs/Custom_entityWhereUniqueInput";

@TypeGraphQL.InputType("Custom_entityCreateOrConnectWithoutAppInput", {})
export class Custom_entityCreateOrConnectWithoutAppInput {
  @TypeGraphQL.Field(_type => Custom_entityWhereUniqueInput, {
    nullable: false
  })
  where!: Custom_entityWhereUniqueInput;

  @TypeGraphQL.Field(_type => Custom_entityCreateWithoutAppInput, {
    nullable: false
  })
  create!: Custom_entityCreateWithoutAppInput;
}
