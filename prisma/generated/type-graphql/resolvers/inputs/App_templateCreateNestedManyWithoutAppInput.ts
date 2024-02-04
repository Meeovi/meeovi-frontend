import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_templateCreateManyAppInputEnvelope } from "../inputs/App_templateCreateManyAppInputEnvelope";
import { App_templateCreateOrConnectWithoutAppInput } from "../inputs/App_templateCreateOrConnectWithoutAppInput";
import { App_templateCreateWithoutAppInput } from "../inputs/App_templateCreateWithoutAppInput";
import { App_templateWhereUniqueInput } from "../inputs/App_templateWhereUniqueInput";

@TypeGraphQL.InputType("App_templateCreateNestedManyWithoutAppInput", {})
export class App_templateCreateNestedManyWithoutAppInput {
  @TypeGraphQL.Field(_type => [App_templateCreateWithoutAppInput], {
    nullable: true
  })
  create?: App_templateCreateWithoutAppInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_templateCreateOrConnectWithoutAppInput], {
    nullable: true
  })
  connectOrCreate?: App_templateCreateOrConnectWithoutAppInput[] | undefined;

  @TypeGraphQL.Field(_type => App_templateCreateManyAppInputEnvelope, {
    nullable: true
  })
  createMany?: App_templateCreateManyAppInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [App_templateWhereUniqueInput], {
    nullable: true
  })
  connect?: App_templateWhereUniqueInput[] | undefined;
}
