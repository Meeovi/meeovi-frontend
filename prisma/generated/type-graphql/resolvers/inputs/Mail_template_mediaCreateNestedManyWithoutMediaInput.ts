import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Mail_template_mediaCreateManyMediaInputEnvelope } from "../inputs/Mail_template_mediaCreateManyMediaInputEnvelope";
import { Mail_template_mediaCreateOrConnectWithoutMediaInput } from "../inputs/Mail_template_mediaCreateOrConnectWithoutMediaInput";
import { Mail_template_mediaCreateWithoutMediaInput } from "../inputs/Mail_template_mediaCreateWithoutMediaInput";
import { Mail_template_mediaWhereUniqueInput } from "../inputs/Mail_template_mediaWhereUniqueInput";

@TypeGraphQL.InputType("Mail_template_mediaCreateNestedManyWithoutMediaInput", {})
export class Mail_template_mediaCreateNestedManyWithoutMediaInput {
  @TypeGraphQL.Field(_type => [Mail_template_mediaCreateWithoutMediaInput], {
    nullable: true
  })
  create?: Mail_template_mediaCreateWithoutMediaInput[] | undefined;

  @TypeGraphQL.Field(_type => [Mail_template_mediaCreateOrConnectWithoutMediaInput], {
    nullable: true
  })
  connectOrCreate?: Mail_template_mediaCreateOrConnectWithoutMediaInput[] | undefined;

  @TypeGraphQL.Field(_type => Mail_template_mediaCreateManyMediaInputEnvelope, {
    nullable: true
  })
  createMany?: Mail_template_mediaCreateManyMediaInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Mail_template_mediaWhereUniqueInput], {
    nullable: true
  })
  connect?: Mail_template_mediaWhereUniqueInput[] | undefined;
}
