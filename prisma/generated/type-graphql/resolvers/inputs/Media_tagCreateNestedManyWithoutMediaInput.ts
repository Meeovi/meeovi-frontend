import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Media_tagCreateManyMediaInputEnvelope } from "../inputs/Media_tagCreateManyMediaInputEnvelope";
import { Media_tagCreateOrConnectWithoutMediaInput } from "../inputs/Media_tagCreateOrConnectWithoutMediaInput";
import { Media_tagCreateWithoutMediaInput } from "../inputs/Media_tagCreateWithoutMediaInput";
import { Media_tagWhereUniqueInput } from "../inputs/Media_tagWhereUniqueInput";

@TypeGraphQL.InputType("Media_tagCreateNestedManyWithoutMediaInput", {})
export class Media_tagCreateNestedManyWithoutMediaInput {
  @TypeGraphQL.Field(_type => [Media_tagCreateWithoutMediaInput], {
    nullable: true
  })
  create?: Media_tagCreateWithoutMediaInput[] | undefined;

  @TypeGraphQL.Field(_type => [Media_tagCreateOrConnectWithoutMediaInput], {
    nullable: true
  })
  connectOrCreate?: Media_tagCreateOrConnectWithoutMediaInput[] | undefined;

  @TypeGraphQL.Field(_type => Media_tagCreateManyMediaInputEnvelope, {
    nullable: true
  })
  createMany?: Media_tagCreateManyMediaInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Media_tagWhereUniqueInput], {
    nullable: true
  })
  connect?: Media_tagWhereUniqueInput[] | undefined;
}
