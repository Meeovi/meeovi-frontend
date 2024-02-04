import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Custom_entityUpdateWithoutAppInput } from "../inputs/Custom_entityUpdateWithoutAppInput";
import { Custom_entityWhereUniqueInput } from "../inputs/Custom_entityWhereUniqueInput";

@TypeGraphQL.InputType("Custom_entityUpdateWithWhereUniqueWithoutAppInput", {})
export class Custom_entityUpdateWithWhereUniqueWithoutAppInput {
  @TypeGraphQL.Field(_type => Custom_entityWhereUniqueInput, {
    nullable: false
  })
  where!: Custom_entityWhereUniqueInput;

  @TypeGraphQL.Field(_type => Custom_entityUpdateWithoutAppInput, {
    nullable: false
  })
  data!: Custom_entityUpdateWithoutAppInput;
}
