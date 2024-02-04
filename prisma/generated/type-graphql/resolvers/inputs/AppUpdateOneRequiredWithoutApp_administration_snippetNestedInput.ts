import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AppCreateOrConnectWithoutApp_administration_snippetInput } from "../inputs/AppCreateOrConnectWithoutApp_administration_snippetInput";
import { AppCreateWithoutApp_administration_snippetInput } from "../inputs/AppCreateWithoutApp_administration_snippetInput";
import { AppUpdateToOneWithWhereWithoutApp_administration_snippetInput } from "../inputs/AppUpdateToOneWithWhereWithoutApp_administration_snippetInput";
import { AppUpsertWithoutApp_administration_snippetInput } from "../inputs/AppUpsertWithoutApp_administration_snippetInput";
import { AppWhereUniqueInput } from "../inputs/AppWhereUniqueInput";

@TypeGraphQL.InputType("AppUpdateOneRequiredWithoutApp_administration_snippetNestedInput", {})
export class AppUpdateOneRequiredWithoutApp_administration_snippetNestedInput {
  @TypeGraphQL.Field(_type => AppCreateWithoutApp_administration_snippetInput, {
    nullable: true
  })
  create?: AppCreateWithoutApp_administration_snippetInput | undefined;

  @TypeGraphQL.Field(_type => AppCreateOrConnectWithoutApp_administration_snippetInput, {
    nullable: true
  })
  connectOrCreate?: AppCreateOrConnectWithoutApp_administration_snippetInput | undefined;

  @TypeGraphQL.Field(_type => AppUpsertWithoutApp_administration_snippetInput, {
    nullable: true
  })
  upsert?: AppUpsertWithoutApp_administration_snippetInput | undefined;

  @TypeGraphQL.Field(_type => AppWhereUniqueInput, {
    nullable: true
  })
  connect?: AppWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => AppUpdateToOneWithWhereWithoutApp_administration_snippetInput, {
    nullable: true
  })
  update?: AppUpdateToOneWithWhereWithoutApp_administration_snippetInput | undefined;
}
