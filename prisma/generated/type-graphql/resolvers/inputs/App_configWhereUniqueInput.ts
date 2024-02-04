import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_configWhereInput } from "../inputs/App_configWhereInput";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("App_configWhereUniqueInput", {})
export class App_configWhereUniqueInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  key?: string | undefined;

  @TypeGraphQL.Field(_type => [App_configWhereInput], {
    nullable: true
  })
  AND?: App_configWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_configWhereInput], {
    nullable: true
  })
  OR?: App_configWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_configWhereInput], {
    nullable: true
  })
  NOT?: App_configWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  value?: StringFilter | undefined;
}
