import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Document_base_configCreateManyMediaInputEnvelope } from "../inputs/Document_base_configCreateManyMediaInputEnvelope";
import { Document_base_configCreateOrConnectWithoutMediaInput } from "../inputs/Document_base_configCreateOrConnectWithoutMediaInput";
import { Document_base_configCreateWithoutMediaInput } from "../inputs/Document_base_configCreateWithoutMediaInput";
import { Document_base_configWhereUniqueInput } from "../inputs/Document_base_configWhereUniqueInput";

@TypeGraphQL.InputType("Document_base_configCreateNestedManyWithoutMediaInput", {})
export class Document_base_configCreateNestedManyWithoutMediaInput {
  @TypeGraphQL.Field(_type => [Document_base_configCreateWithoutMediaInput], {
    nullable: true
  })
  create?: Document_base_configCreateWithoutMediaInput[] | undefined;

  @TypeGraphQL.Field(_type => [Document_base_configCreateOrConnectWithoutMediaInput], {
    nullable: true
  })
  connectOrCreate?: Document_base_configCreateOrConnectWithoutMediaInput[] | undefined;

  @TypeGraphQL.Field(_type => Document_base_configCreateManyMediaInputEnvelope, {
    nullable: true
  })
  createMany?: Document_base_configCreateManyMediaInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Document_base_configWhereUniqueInput], {
    nullable: true
  })
  connect?: Document_base_configWhereUniqueInput[] | undefined;
}
