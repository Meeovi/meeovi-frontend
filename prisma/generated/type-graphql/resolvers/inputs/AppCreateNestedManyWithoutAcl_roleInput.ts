import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AppCreateManyAcl_roleInputEnvelope } from "../inputs/AppCreateManyAcl_roleInputEnvelope";
import { AppCreateOrConnectWithoutAcl_roleInput } from "../inputs/AppCreateOrConnectWithoutAcl_roleInput";
import { AppCreateWithoutAcl_roleInput } from "../inputs/AppCreateWithoutAcl_roleInput";
import { AppWhereUniqueInput } from "../inputs/AppWhereUniqueInput";

@TypeGraphQL.InputType("AppCreateNestedManyWithoutAcl_roleInput", {})
export class AppCreateNestedManyWithoutAcl_roleInput {
  @TypeGraphQL.Field(_type => [AppCreateWithoutAcl_roleInput], {
    nullable: true
  })
  create?: AppCreateWithoutAcl_roleInput[] | undefined;

  @TypeGraphQL.Field(_type => [AppCreateOrConnectWithoutAcl_roleInput], {
    nullable: true
  })
  connectOrCreate?: AppCreateOrConnectWithoutAcl_roleInput[] | undefined;

  @TypeGraphQL.Field(_type => AppCreateManyAcl_roleInputEnvelope, {
    nullable: true
  })
  createMany?: AppCreateManyAcl_roleInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [AppWhereUniqueInput], {
    nullable: true
  })
  connect?: AppWhereUniqueInput[] | undefined;
}
